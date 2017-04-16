/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Options for the web photo gallery colors */
		class GalleryCustomColorOptions extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/**
			 * active link color
			 * @type {Adobe.Photoshop.RGBColor}
			 */
			public activeLinkColor: Adobe.Photoshop.RGBColor;
			/**
			 * background color
			 * @type {Adobe.Photoshop.RGBColor}
			 */
			public backgroundColor: Adobe.Photoshop.RGBColor;
			/**
			 * banner color
			 * @type {Adobe.Photoshop.RGBColor}
			 */
			public bannerColor: Adobe.Photoshop.RGBColor;
			/**
			 * link color
			 * @type {Adobe.Photoshop.RGBColor}
			 */
			public linkColor: Adobe.Photoshop.RGBColor;
			/**
			 * text color
			 * @type {Adobe.Photoshop.RGBColor}
			 */
			public textColor: Adobe.Photoshop.RGBColor;
			/**
			 * visited link color
			 * @type {Adobe.Photoshop.RGBColor}
			 */
			public visitedLinkColor: Adobe.Photoshop.RGBColor;
		}
	}
}