/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class ColorProfile extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Everything gets tagged (embedProfile == true) */
			public static readonly INCLUDEALLPROFILE: Adobe.Illustrator.ColorProfile;
			/** Everything ends up tagged with the destination profile. */
			public static readonly INCLUDEDESTPROFILE: Adobe.Illustrator.ColorProfile;
			/** Tag all RGB, leave CMYK unchanged. */
			public static readonly INCLUDERGBPROFILE: Adobe.Illustrator.ColorProfile;
			/** Leave tagged items tagged, untagged items untagged. */
			public static readonly LEAVEPROFILEUNCHANGED: Adobe.Illustrator.ColorProfile;
			/** All profiles removed (embedProfile == false) */
			public static readonly None: Adobe.Illustrator.ColorProfile;
			/** Constructor */
			public constructor();
		}
	}
}