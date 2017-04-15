/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class GallerySecurityOptions extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/**
			 * web photo gallery security content ( default: 
			 * GallerySecurityType.NONE )
			 */
			public content: Adobe.Photoshop.GallerySecurityType;
			/**
			 * web photo gallery security font ( default: 
			 * GalleryFontType.ARIAL )
			 */
			public font: Adobe.Photoshop.GalleryFontType;
			/**
			 * web photo gallery security font size ( minimum 1; default: 
			 * 36 )
			 */
			public fontSize: number;
			/** web page security opacity as a percent ( default: 100 ) */
			public opacity: number;
			/** web photo gallery security custom text ( default:  ) */
			public text: string;
			/** web page security text color */
			public textColor: Adobe.Photoshop.RGBColor;
			/**
			 * web photo gallery security text position ( default: 
			 * GallerySecurityTextPositionType.CENTERED )
			 */
			public textPosition: Adobe.Photoshop.GallerySecurityTextPositionType;
			/**
			 * web photo gallery security text rotate ( default: 
			 * GallerySecurityTextRotateType.ZERO )
			 */
			public textRotate: Adobe.Photoshop.GallerySecurityTextRotateType;
		}
	}
}