/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Options for the web photo gallery security */
		class GallerySecurityOptions extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/**
			 * web photo gallery security content ( default: 
			 * GallerySecurityType.NONE )
			 * @type {Adobe.Photoshop.GallerySecurityType}
			 */
			public content: Adobe.Photoshop.GallerySecurityType;
			/**
			 * web photo gallery security font ( default: 
			 * GalleryFontType.ARIAL )
			 * @type {Adobe.Photoshop.GalleryFontType}
			 */
			public font: Adobe.Photoshop.GalleryFontType;
			/**
			 * web photo gallery security font size ( minimum 1; default: 
			 * 36 )
			 * @type {number}
			 */
			public fontSize: number;
			/**
			 * web page security opacity as a percent ( default: 100 )
			 * @type {number}
			 */
			public opacity: number;
			/**
			 * web photo gallery security custom text ( default:  )
			 * @type {string}
			 */
			public text: string;
			/**
			 * web page security text color
			 * @type {Adobe.Photoshop.RGBColor}
			 */
			public textColor: Adobe.Photoshop.RGBColor;
			/**
			 * web photo gallery security text position ( default: 
			 * GallerySecurityTextPositionType.CENTERED )
			 * @type {Adobe.Photoshop.GallerySecurityTextPositionType}
			 */
			public textPosition: Adobe.Photoshop.GallerySecurityTextPositionType;
			/**
			 * web photo gallery security text rotate ( default: 
			 * GallerySecurityTextRotateType.ZERO )
			 * @type {Adobe.Photoshop.GallerySecurityTextRotateType}
			 */
			public textRotate: Adobe.Photoshop.GallerySecurityTextRotateType;
		}
	}
}