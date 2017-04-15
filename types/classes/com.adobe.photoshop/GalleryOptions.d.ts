/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Options for the web photo gallery command */
		class GalleryOptions extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/**
			 * add width and height attributes for images ( default: true )
			 */
			public addSizeAttributes: boolean;
			/** options related to banner settings */
			public bannerOptions: Adobe.Photoshop.GalleryBannerOptions;
			/** options related to custom color settings */
			public customColorOptions: Adobe.Photoshop.GalleryCustomColorOptions;
			/** the email address to show on the web page ( default:  ) */
			public emailAddress: string;
			/** options related to images settings */
			public imagesOptions: Adobe.Photoshop.GalleryImagesOptions;
			/**
			 * include all files found in sub folders of the input folder ( 
			 * default: true )
			 */
			public includeSubFolders: boolean;
			/**
			 * the style to use for laying out the web page ( default: 
			 * Centered Frame 1 - Basic )
			 */
			public layoutStyle: string;
			/**
			 * save all of the metadata in the JPEG files ( default: false 
			 * )
			 */
			public preserveAllMetadata: boolean;
			/** options related to security settings */
			public securityOptions: Adobe.Photoshop.GallerySecurityOptions;
			/** options related to thumbnail settings */
			public thumbnailOptions: Adobe.Photoshop.GalleryThumbnailOptions;
			/**
			 * short web page extension .htm or long web page extension 
			 * .html ( default: true )
			 */
			public useShortExtension: boolean;
			/** web page should use UTF-8 encoding ( default: false ) */
			public useUTF8Encoding: boolean;
		}
	}
}