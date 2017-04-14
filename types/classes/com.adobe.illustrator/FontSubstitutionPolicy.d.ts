/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class FontSubstitutionPolicy extends IllustratorEnumBase {
			public static readonly enumCache: CSEnumSharedCache;
			/** Substitute device font. */
			public static readonly SUBSTITUTEDEVICE: FontSubstitutionPolicy;
			/** Substitute oblique font. */
			public static readonly SUBSTITUTEOBLIQUE: FontSubstitutionPolicy;
			/** Substitute tint font. */
			public static readonly SUBSTITUTETINT: FontSubstitutionPolicy;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}