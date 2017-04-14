/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class FontBaselineOption extends IllustratorEnumBase {
			public static readonly enumCache: CSEnumSharedCache;
			/** Normal baseline. */
			public static readonly NORMALBASELINE: FontBaselineOption;
			/** Fauxed subscript baseline. */
			public static readonly SUBSCRIPT: FontBaselineOption;
			/** Fauxed superscript baseline. */
			public static readonly SUPERSCRIPT: FontBaselineOption;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}