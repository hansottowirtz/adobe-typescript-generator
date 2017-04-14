/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class DocumentPresetType extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/** The default CMYK document preset. */
			public static readonly BasicCMYK: Adobe.Illustrator.DocumentPresetType;
			/** The default RGB document preset. */
			public static readonly BasicRGB: Adobe.Illustrator.DocumentPresetType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** The default Mobile document preset. */
			public static readonly Mobile: Adobe.Illustrator.DocumentPresetType;
			/** The default Print document preset. */
			public static readonly Print: Adobe.Illustrator.DocumentPresetType;
			/** The default Video and Film document preset. */
			public static readonly Video: Adobe.Illustrator.DocumentPresetType;
			/** The default Web document preset. */
			public static readonly Web: Adobe.Illustrator.DocumentPresetType;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}