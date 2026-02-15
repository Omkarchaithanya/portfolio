# Security Update - January 2025

## Next.js Upgrade: 14.2.35 → 15.5.12

### Summary
Updated Next.js from version 14.2.35 to 15.5.12 to address multiple critical security vulnerabilities.

### Vulnerabilities Fixed

All of the following DoS (Denial of Service) vulnerabilities have been patched:

1. **HTTP request deserialization DoS** - Affected versions 13.0.0 - 15.0.7
2. **Server Actions DoS** - Affected versions 10.0.0 - 15.5.9
3. **Cache poisoning vulnerabilities** - Multiple variants
4. **Image Optimization API issues** - Cache key confusion and content injection
5. **SSRF via Middleware redirect handling**
6. **Authorization bypass in Middleware**
7. **Information exposure in dev server**

### Changes Made

- ✅ Updated `next` from `14.2.35` to `15.5.12`
- ✅ Updated `eslint-config-next` from `14.2.35` to `15.5.12`
- ✅ Verified all dependencies are compatible
- ✅ Tested dev server functionality
- ✅ Updated documentation to reflect version change

### Verification

```bash
npm audit
# Result: found 0 vulnerabilities ✅
```

### Testing

- ✅ Dev server starts successfully
- ✅ All components load without errors
- ✅ TypeScript compilation succeeds
- ✅ No breaking changes detected

### Compatibility Notes

Next.js 15 includes some improvements but is fully compatible with our codebase:
- App Router API remains stable
- Client Components work as expected
- Server Components not used (portfolio is client-heavy)
- All React Three Fiber integration works correctly

### Action Required

Users should update their dependencies:

```bash
npm install --legacy-peer-deps
```

Or if starting fresh:

```bash
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

### References

- [Next.js Security Advisories](https://github.com/vercel/next.js/security/advisories)
- [Next.js 15 Release Notes](https://nextjs.org/blog/next-15)

---

**Status**: ✅ All vulnerabilities resolved
**Date**: January 2026
**Severity**: Critical → Resolved
