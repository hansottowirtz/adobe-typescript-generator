/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class LayerOrderType extends IllustratorEnumBase {
			public static readonly BOTTOMUP: LayerOrderType;
			public static readonly enumCache: CSEnumSharedCache;
			public static readonly TOPDOWN: LayerOrderType;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}