# Findings
- Only 3 attribute kinds: property, method and Constructor
- Every return type matches /(\w+|\*)/
- Only public and protected access modifiers
- override modifier
- Every method has 'function' in implementation
- /^(override)? ?(protected|public|flash_proxy) ?(static)? function (\w+)\((?:(\w+): ?(\w+|\*) ?(?:= ([\w\d\.\/-]+))?,? ?)*(?: \.{3} ?(\w+))?\)(?:: ?(\w+|\*))?$/
