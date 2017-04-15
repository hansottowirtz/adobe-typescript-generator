/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class CameraRAWSettingsType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** Use the settings of the camera. */
			public static readonly CAMERA: Adobe.Photoshop.CameraRAWSettingsType;
			/** Use the custom settings. */
			public static readonly CUSTOM: Adobe.Photoshop.CameraRAWSettingsType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Use the settings of the selected image. */
			public static readonly SELECTEDIMAGE: Adobe.Photoshop.CameraRAWSettingsType;
			/** Constructor */
			public constructor();
		}
	}
}