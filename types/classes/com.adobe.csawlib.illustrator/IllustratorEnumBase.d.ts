/// <reference path="../../namespaces/com.adobe.csawlib.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace CsawlibIllustrator {
		/**  Base for all enum-representing classes  */
		class IllustratorEnumBase extends Adobe.Csawlib.CSEnumBase {
			/** Returns the numerical value */
			public readonly value: any;
			/** Constructor */
			public constructor();
		}
	}
}