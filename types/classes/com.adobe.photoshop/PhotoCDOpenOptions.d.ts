/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class PhotoCDOpenOptions extends Adobe.Photoshop.OpenOptions {
			/** profile to use when reading the image */
			public colorProfileName: string;
			/** colorspace for image */
			public colorSpace: Adobe.Photoshop.PhotoCDColorSpace;
			public orientation: Adobe.Photoshop.Orientation;
			/** dimensions of image */
			public pixelSize: Adobe.Photoshop.PhotoCDSize;
			/** the resolution of the image (in pixels per inch) */
			public resolution: number;
		}
	}
}