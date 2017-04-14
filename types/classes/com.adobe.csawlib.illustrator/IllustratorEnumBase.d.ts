/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.csawlib.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace CsawlibIllustrator {
		class IllustratorEnumBase extends CSEnumBase {
			/** Returns the numerical value */
			public readonly value: any;
			/** Constructor */
			public constructor(delegateHostObject: HostObject, _enum: number);
		}
	}
}