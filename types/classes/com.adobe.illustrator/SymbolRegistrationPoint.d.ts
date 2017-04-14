/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class SymbolRegistrationPoint extends IllustratorEnumBase {
			public static readonly enumCache: CSEnumSharedCache;
			/** bottom left point of symbol bounding box */
			public static readonly SYMBOLBOTTOMLEFTPOINT: SymbolRegistrationPoint;
			/** bottom middle point of symbol bounding box */
			public static readonly SYMBOLBOTTOMMIDDLEPOINT: SymbolRegistrationPoint;
			/** bottom right point of symbol bounding box */
			public static readonly SYMBOLBOTTOMRIGHTPOINT: SymbolRegistrationPoint;
			/** center point of symbol bounding box */
			public static readonly SYMBOLCENTERPOINT: SymbolRegistrationPoint;
			/** middle left point of symbol bounding box */
			public static readonly SYMBOLMIDDLELEFTPOINT: SymbolRegistrationPoint;
			/** middle right point of symbol bounding box */
			public static readonly SYMBOLMIDDLERIGHTPOINT: SymbolRegistrationPoint;
			/** top left point of symbol bounding box */
			public static readonly SYMBOLTOPLEFTPOINT: SymbolRegistrationPoint;
			/** top middle point of symbol bounding box */
			public static readonly SYMBOLTOPMIDDLEPOINT: SymbolRegistrationPoint;
			/** top right point of symbol bounding box */
			public static readonly SYMBOLTOPRIGHTPOINT: SymbolRegistrationPoint;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}