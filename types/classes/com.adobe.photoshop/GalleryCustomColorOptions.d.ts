/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Options for the web photo gallery colors */
		class GalleryCustomColorOptions extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/** active link color */
			public activeLinkColor: Adobe.Photoshop.RGBColor;
			/** background color */
			public backgroundColor: Adobe.Photoshop.RGBColor;
			/** banner color */
			public bannerColor: Adobe.Photoshop.RGBColor;
			/** link color */
			public linkColor: Adobe.Photoshop.RGBColor;
			/** text color */
			public textColor: Adobe.Photoshop.RGBColor;
			/** visited link color */
			public visitedLinkColor: Adobe.Photoshop.RGBColor;
		}
	}
}