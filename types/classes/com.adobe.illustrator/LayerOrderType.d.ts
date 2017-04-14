/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class LayerOrderType extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly BOTTOMUP: Adobe.Illustrator.LayerOrderType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly TOPDOWN: Adobe.Illustrator.LayerOrderType;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}