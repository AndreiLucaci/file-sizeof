# size-of
minimalistic size of for files using the native nodeJs fs stats

## Contents
For now, the current implementation supports standards `SI` - decimal units and `IEC` - binary units
```typescript
const sizeof: {
  SI: (input: string | Buffer) => ISizeOf;
  IEC: (input: string | Buffer) => ISizeOf;
};
```

and the `ISizeOf`

```typescript
interface ISizeOf {
  B: number;
  KB: number;
  MB: number;
  GB: number;
  TB: number;
  PB: number;
}
```

## Example

Here's a basic example of loading from a given file path:

```typescript
const { sizeof } = require("file-sizeof");

const si = sizeof.SI("./testfile_large.mp4");
const iec = sizeof.IEC("./testfile_large.mp4");

// testfile_large.mp4 is exactly 6 GB in IEC
console.log(si.B);          // 6442450944   
console.log(iec.B);         // 6442450944
console.log(si.KB);         // 6442450.944
console.log(iec.KB);        // 6291456
console.log(si.MB);         // 6442.450944
console.log(iec.MB);        // 6144
console.log(si.GB);         // 6.442450944
console.log(iec.GB);        // 6
console.log(si.TB);         // 0.006442450944
console.log(iec.TB);        // 0.005859375
console.log(si.PB);         // 0.000006442450944
console.log(iec.PB);        // 0.0000057220458984375

```

## Instalation
```bash
yarn add file-sizeof
# or
npm install file-sizeof
```
