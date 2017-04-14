/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class ExportOptionsPhotoshop extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/** should the resulting image be antialiased ( default: true ) */
			public antiAliasing: boolean;
			/**
			 * If SaveMultipleArtboards is true,this will be considered for 
			 * multi-asset extraction which specifies artboard range.Empty 
			 * string will extracts all the artboards.Default is empty 
			 * string ( default:  )
			 */
			public artboardRange: string;
			/**
			 * export text objects as editable text layers ( default: true 
			 * )
			 */
			public editableText: boolean;
			/** embed an ICC profile when exporting ( default: false ) */
			public embedICCProfile: boolean;
			/**
			 * the color space of the exported file ( default: 
			 * ImageColorSpace.RGB )
			 */
			public imageColorSpace: Adobe.Illustrator.ImageColorSpace;
			/**
			 * preserve as much of the original document's structure as 
			 * possible when exporting ( default: true )
			 */
			public maximumEditability: boolean;
			/**
			 * The resolution of the exported file ( 72.0 - 2400.0; 
			 * default: 150.0 )
			 */
			public resolution: number;
			/**
			 * All the artboards or range of the artboards will be exported 
			 * ( default: false )
			 */
			public saveMultipleArtboards: boolean;
			/**
			 * should a warning dialog be displayed because of conflicts in 
			 * the export settings ( default: true )
			 */
			public warnings: boolean;
			/** preserve document layers when exporting ( default: true ) */
			public writeLayers: boolean;
		}
	}
}