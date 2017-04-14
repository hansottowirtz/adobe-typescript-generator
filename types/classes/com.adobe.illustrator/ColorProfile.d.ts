/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class ColorProfile extends IllustratorEnumBase {
			public static readonly enumCache: CSEnumSharedCache;
			/** Everything gets tagged (embedProfile == true) */
			public static readonly INCLUDEALLPROFILE: ColorProfile;
			/** Everything ends up tagged with the destination profile. */
			public static readonly INCLUDEDESTPROFILE: ColorProfile;
			/** Tag all RGB, leave CMYK unchanged. */
			public static readonly INCLUDERGBPROFILE: ColorProfile;
			/** Leave tagged items tagged, untagged items untagged. */
			public static readonly LEAVEPROFILEUNCHANGED: ColorProfile;
			/** All profiles removed (embedProfile == false) */
			public static readonly None: ColorProfile;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}