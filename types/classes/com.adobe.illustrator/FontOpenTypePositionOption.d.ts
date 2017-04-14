/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class FontOpenTypePositionOption extends IllustratorEnumBase {
			/** OpenType denominator position. */
			public static readonly DENOMINATOR: FontOpenTypePositionOption;
			public static readonly enumCache: CSEnumSharedCache;
			/** OpenType numerator position. */
			public static readonly NUMERATOR: FontOpenTypePositionOption;
			/** Default position. */
			public static readonly OPENTYPEDEFAULT: FontOpenTypePositionOption;
			/** OpenType subscript position. */
			public static readonly OPENTYPESUBSCRIPT: FontOpenTypePositionOption;
			/** OpenType superscript position. */
			public static readonly OPENTYPESUPERSCRIPT: FontOpenTypePositionOption;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}