/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class BlendAnimationType extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly INBUILD: Adobe.Illustrator.BlendAnimationType;
			public static readonly INSEQUENCE: Adobe.Illustrator.BlendAnimationType;
			/** No blend animation. */
			public static readonly NOBLENDANIMATION: Adobe.Illustrator.BlendAnimationType;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}