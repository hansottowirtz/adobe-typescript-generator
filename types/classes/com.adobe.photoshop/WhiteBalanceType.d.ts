/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** The lighting conditions (affects color balance). */
		class WhiteBalanceType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** Use the settings of the camera as shot. */
			public static readonly ASSHOT: Adobe.Photoshop.WhiteBalanceType;
			/** Automatically use the white balance settings. */
			public static readonly AUTO: Adobe.Photoshop.WhiteBalanceType;
			/** Use the settings as shot on a cloudy day. */
			public static readonly CLOUDY: Adobe.Photoshop.WhiteBalanceType;
			/** Use the custom settings for the shot parameters. */
			public static readonly CUSTOM: Adobe.Photoshop.WhiteBalanceType;
			/** Use the settings as shot in daylight. */
			public static readonly DAYLIGHT: Adobe.Photoshop.WhiteBalanceType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Use the settings as shot with a flash. */
			public static readonly FLASH: Adobe.Photoshop.WhiteBalanceType;
			/** Use the settings as shot with fluorescent lighting. */
			public static readonly FLUORESCENT: Adobe.Photoshop.WhiteBalanceType;
			/** Use the settings as shot in the shade. */
			public static readonly SHADE: Adobe.Photoshop.WhiteBalanceType;
			/** Use the settings as shot with tungsten lighting. */
			public static readonly TUNGSTEN: Adobe.Photoshop.WhiteBalanceType;
			/** Constructor */
			public constructor();
		}
	}
}