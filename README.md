# Findings
- Only 3 attribute kinds: property, method and Constructor
- Every return type matches /(\w+|\*)/
- Only public and protected access modifiers
- override modifier
- Every method has 'function' in implementation
- /^(override)? ?(protected|public|flash_proxy) ?(static)? function (\w+)\((?:(\w+): ?(\w+|\*) ?(?:= ([\w\d\.\/-]+))?,? ?)*(?: \.{3} ?(\w+))?\)(?:: ?(\w+|\*))?$/
- http://cssdk.s3-website-us-east-1.amazonaws.com/sdk/1.5/docs/WebHelp/suitesdk.htm
- http://cssdk.s3-website-us-east-1.amazonaws.com/sdk/2.1/docs/WebHelp/references/XMPASLib/XMP_API_Summary.htm

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
