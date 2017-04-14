/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class BlendAnimationType extends IllustratorEnumBase {
			public static readonly enumCache: CSEnumSharedCache;
			public static readonly INBUILD: BlendAnimationType;
			public static readonly INSEQUENCE: BlendAnimationType;
			/** No blend animation. */
			public static readonly NOBLENDANIMATION: BlendAnimationType;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}