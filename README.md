# Findings
- Only 3 attribute kinds: property, method and Constructor
- Every return type matches /(\w+|\*)/
- Only public and protected access modifiers
- override modifier
- Every method has 'function' in implementation
- /^(override)? ?(protected|public|flash_proxy) ?(static)? function (\w+)\((?:(\w+): ?(\w+|\*) ?(?:= ([\w\d\.\/-]+))?,? ?)*(?: \.{3} ?(\w+))?\)(?:: ?(\w+|\*))?$/

# Setup

```bash
git clone https://github.com/hansottowirtz/adobe-cssdk-to-dts
cd adobe-cssdk-to-dts
chmod +x ./bin/adobe-cssdk-to-dts
bundle install
```

# Usage
```bash
./bin/adobe-cssdk-to-dts convert-all
```
