/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class FontSubstitutionPolicy extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Substitute device font. */
			public static readonly SUBSTITUTEDEVICE: Adobe.Illustrator.FontSubstitutionPolicy;
			/** Substitute oblique font. */
			public static readonly SUBSTITUTEOBLIQUE: Adobe.Illustrator.FontSubstitutionPolicy;
			/** Substitute tint font. */
			public static readonly SUBSTITUTETINT: Adobe.Illustrator.FontSubstitutionPolicy;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}