export interface Vec3 {
  x: number;
  y: number;
  z: number;
}

export interface AABB {
  minX: number;
  minY: number;
  minZ: number;
  maxX: number;
  maxY: number;
  maxZ: number;
}

export function createVec3(x: number = 0, y: number = 0, z: number = 0): Vec3 {
  return { x, y, z };
}

export function cloneVec3(v: Vec3): Vec3 {
  return { x: v.x, y: v.y, z: v.z };
}

export function addVec3(a: Vec3, b: Vec3): Vec3 {
  return { x: a.x + b.x, y: a.y + b.y, z: a.z + b.z };
}

export function subVec3(a: Vec3, b: Vec3): Vec3 {
  return { x: a.x - b.x, y: a.y - b.y, z: a.z - b.z };
}

export function scaleVec3(v: Vec3, s: number): Vec3 {
  return { x: v.x * s, y: v.y * s, z: v.z * s };
}

export function lengthVec3(v: Vec3): number {
  return Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
}

export function normalizeVec3(v: Vec3): Vec3 {
  const len = lengthVec3(v);
  if (len === 0) return { x: 0, y: 0, z: 0 };
  return { x: v.x / len, y: v.y / len, z: v.z / len };
}

export function dotVec3(a: Vec3, b: Vec3): number {
  return a.x * b.x + a.y * b.y + a.z * b.z;
}

export function lerpVec3(a: Vec3, b: Vec3, t: number): Vec3 {
  return {
    x: a.x + (b.x - a.x) * t,
    y: a.y + (b.y - a.y) * t,
    z: a.z + (b.z - a.z) * t,
  };
}

export function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

export function clamp(v: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, v));
}

export function createAABB(minX: number, minY: number, minZ: number,
                           maxX: number, maxY: number, maxZ: number): AABB {
  return { minX, minY, minZ, maxX, maxY, maxZ };
}

export function aabbFromCenter(cx: number, cy: number, cz: number,
                                hw: number, hh: number, hd: number): AABB {
  return {
    minX: cx - hw, minY: cy - hh, minZ: cz - hd,
    maxX: cx + hw, maxY: cy + hh, maxZ: cz + hd,
  };
}

export function aabbIntersects(a: AABB, b: AABB): boolean {
  return a.minX < b.maxX && a.maxX > b.minX &&
         a.minY < b.maxY && a.maxY > b.minY &&
         a.minZ < b.maxZ && a.maxZ > b.minZ;
}

export function aabbContains(a: AABB, x: number, y: number, z: number): boolean {
  return x >= a.minX && x <= a.maxX &&
         y >= a.minY && y <= a.maxY &&
         z >= a.minZ && z <= a.maxZ;
}

// ═══════════════════════════════
// DDA VOXEL RAYCAST
// ═══════════════════════════════
export interface RaycastResult {
  hit: boolean;
  blockX: number;
  blockY: number;
  blockZ: number;
  prevX: number; // block before hit (for placement)
  prevY: number;
  prevZ: number;
  normalX: number;
  normalY: number;
  normalZ: number;
  distance: number;
}

export function ddaRaycast(
  origin: Vec3,
  direction: Vec3,
  maxDistance: number,
  isSolid: (x: number, y: number, z: number) => boolean
): RaycastResult {
  const dx = direction.x;
  const dy = direction.y;
  const dz = direction.z;

  let x = Math.floor(origin.x);
  let y = Math.floor(origin.y);
  let z = Math.floor(origin.z);

  const stepX = dx > 0 ? 1 : -1;
  const stepY = dy > 0 ? 1 : -1;
  const stepZ = dz > 0 ? 1 : -1;

  const tDeltaX = dx !== 0 ? Math.abs(1 / dx) : Infinity;
  const tDeltaY = dy !== 0 ? Math.abs(1 / dy) : Infinity;
  const tDeltaZ = dz !== 0 ? Math.abs(1 / dz) : Infinity;

  let tMaxX = dx !== 0 ? ((dx > 0 ? (x + 1 - origin.x) : (origin.x - x)) * tDeltaX) : Infinity;
  let tMaxY = dy !== 0 ? ((dy > 0 ? (y + 1 - origin.y) : (origin.y - y)) * tDeltaY) : Infinity;
  let tMaxZ = dz !== 0 ? ((dz > 0 ? (z + 1 - origin.z) : (origin.z - z)) * tDeltaZ) : Infinity;

  let prevX = x, prevY = y, prevZ = z;
  let t = 0;

  for (let i = 0; i < maxDistance * 3; i++) {
    if (isSolid(x, y, z)) {
      return {
        hit: true,
        blockX: x, blockY: y, blockZ: z,
        prevX, prevY, prevZ,
        normalX: prevX - x, normalY: prevY - y, normalZ: prevZ - z,
        distance: t,
      };
    }

    prevX = x; prevY = y; prevZ = z;

    if (tMaxX < tMaxY) {
      if (tMaxX < tMaxZ) {
        t = tMaxX;
        if (t > maxDistance) break;
        x += stepX;
        tMaxX += tDeltaX;
      } else {
        t = tMaxZ;
        if (t > maxDistance) break;
        z += stepZ;
        tMaxZ += tDeltaZ;
      }
    } else {
      if (tMaxY < tMaxZ) {
        t = tMaxY;
        if (t > maxDistance) break;
        y += stepY;
        tMaxY += tDeltaY;
      } else {
        t = tMaxZ;
        if (t > maxDistance) break;
        z += stepZ;
        tMaxZ += tDeltaZ;
      }
    }
  }

  return {
    hit: false,
    blockX: x, blockY: y, blockZ: z,
    prevX, prevY, prevZ,
    normalX: 0, normalY: 0, normalZ: 0,
    distance: t,
  };
}
