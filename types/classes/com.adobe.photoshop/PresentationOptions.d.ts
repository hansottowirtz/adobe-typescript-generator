/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** options for the PDF presentation command */
		class PresentationOptions extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/**
			 * auto advance when viewing ( default: true )
			 * @type {boolean}
			 */
			public autoAdvance: boolean;
			/**
			 * include file name for image ( default: false )
			 * @type {boolean}
			 */
			public includeFilename: boolean;
			/**
			 * time in seconds before auto advancing the view ( default: 5 
			 * )
			 * @type {number}
			 */
			public interval: number;
			/**
			 * loop after last page ( default: false )
			 * @type {boolean}
			 */
			public loop: boolean;
			/**
			 * magnification type when viewing the image ( default: 
			 * MagnificationType.ACTUALSIZE )
			 * @type {Adobe.Photoshop.MagnificationType}
			 */
			public magnification: Adobe.Photoshop.MagnificationType;
			/**
			 * Options used when creating the PDF file
			 * @type {Adobe.Photoshop.PDFSaveOptions}
			 */
			public PDFFileOptions: Adobe.Photoshop.PDFSaveOptions;
			/**
			 * true if the file type is presentation false for Multi-Page 
			 * document ( default: false )
			 * @type {boolean}
			 */
			public presentation: boolean;
			/**
			 * transition type when switching to the next document ( 
			 * default: TransitionType.NONE )
			 * @type {Adobe.Photoshop.TransitionType}
			 */
			public transition: Adobe.Photoshop.TransitionType;
		}
	}
}