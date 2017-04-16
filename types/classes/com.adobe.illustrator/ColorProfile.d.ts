/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class ColorProfile extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly INCLUDEALLPROFILE: Adobe.Illustrator.ColorProfile;
			public static readonly INCLUDEDESTPROFILE: Adobe.Illustrator.ColorProfile;
			public static readonly INCLUDERGBPROFILE: Adobe.Illustrator.ColorProfile;
			public static readonly LEAVEPROFILEUNCHANGED: Adobe.Illustrator.ColorProfile;
			public static readonly None: Adobe.Illustrator.ColorProfile;
			/** Constructor */
			public constructor();
		}
	}
}