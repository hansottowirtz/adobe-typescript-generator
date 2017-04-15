/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class PresentationOptions extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/** auto advance when viewing ( default: true ) */
			public autoAdvance: boolean;
			/** include file name for image ( default: false ) */
			public includeFilename: boolean;
			/**
			 * time in seconds before auto advancing the view ( default: 5 
			 * )
			 */
			public interval: number;
			/** loop after last page ( default: false ) */
			public loop: boolean;
			/**
			 * magnification type when viewing the image ( default: 
			 * MagnificationType.ACTUALSIZE )
			 */
			public magnification: Adobe.Photoshop.MagnificationType;
			/** Options used when creating the PDF file */
			public PDFFileOptions: Adobe.Photoshop.PDFSaveOptions;
			/**
			 * true if the file type is presentation false for Multi-Page 
			 * document ( default: false )
			 */
			public presentation: boolean;
			/**
			 * transition type when switching to the next document ( 
			 * default: TransitionType.NONE )
			 */
			public transition: Adobe.Photoshop.TransitionType;
		}
	}
}