/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Options for the web photo gallery command */
		class GalleryOptions extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/**
			 * add width and height attributes for images ( default: true )
			 * @type {boolean}
			 */
			public addSizeAttributes: boolean;
			/**
			 * options related to banner settings
			 * @type {Adobe.Photoshop.GalleryBannerOptions}
			 */
			public bannerOptions: Adobe.Photoshop.GalleryBannerOptions;
			/**
			 * options related to custom color settings
			 * @type {Adobe.Photoshop.GalleryCustomColorOptions}
			 */
			public customColorOptions: Adobe.Photoshop.GalleryCustomColorOptions;
			/**
			 * the email address to show on the web page ( default:  )
			 * @type {string}
			 */
			public emailAddress: string;
			/**
			 * options related to images settings
			 * @type {Adobe.Photoshop.GalleryImagesOptions}
			 */
			public imagesOptions: Adobe.Photoshop.GalleryImagesOptions;
			/**
			 * include all files found in sub folders of the input folder ( 
			 * default: true )
			 * @type {boolean}
			 */
			public includeSubFolders: boolean;
			/**
			 * the style to use for laying out the web page ( default: 
			 * Centered Frame 1 - Basic )
			 * @type {string}
			 */
			public layoutStyle: string;
			/**
			 * save all of the metadata in the JPEG files ( default: false 
			 * )
			 * @type {boolean}
			 */
			public preserveAllMetadata: boolean;
			/**
			 * options related to security settings
			 * @type {Adobe.Photoshop.GallerySecurityOptions}
			 */
			public securityOptions: Adobe.Photoshop.GallerySecurityOptions;
			/**
			 * options related to thumbnail settings
			 * @type {Adobe.Photoshop.GalleryThumbnailOptions}
			 */
			public thumbnailOptions: Adobe.Photoshop.GalleryThumbnailOptions;
			/**
			 * short web page extension .htm or long web page extension 
			 * .html ( default: true )
			 * @type {boolean}
			 */
			public useShortExtension: boolean;
			/**
			 * web page should use UTF-8 encoding ( default: false )
			 * @type {boolean}
			 */
			public useUTF8Encoding: boolean;
		}
	}
}