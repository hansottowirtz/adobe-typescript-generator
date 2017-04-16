# Adobe TypeScript Generator
### Generating .d.ts files to make programming Adobe applications easier

You can find the declaration files in the [types](types/) folder.
You can reference a package like this:

```typescript
/// <reference path="../types/packages/com.adobe.illustrator/globals.d.ts"/>
```

All the globals available in Illustrator will then be declared on the global scope in TypeScript.

## Setup

```bash
git clone https://github.com/hansottowirtz/adobe-cssdk-to-dts
cd adobe-typescript-generator
chmod +x bin/adobe-typescript-generator
bundle install
```

## Usage

```bash
./bin/adobe-typescript-generator convert-all
```
