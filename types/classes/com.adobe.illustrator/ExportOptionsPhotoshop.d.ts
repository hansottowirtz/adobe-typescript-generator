/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/**
		 * Options which may be supplied when exporting a document as a 
		 * Photoshop file
		 */
		class ExportOptionsPhotoshop extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * should the resulting image be antialiased ( default: true )
			 * @type {boolean}
			 */
			public antiAliasing: boolean;
			/**
			 * If SaveMultipleArtboards is true,this will be considered for 
			 * multi-asset extraction which specifies artboard range.Empty 
			 * string will extracts all the artboards.Default is empty 
			 * string ( default:  )
			 * @type {string}
			 */
			public artboardRange: string;
			/**
			 * export text objects as editable text layers ( default: true 
			 * )
			 * @type {boolean}
			 */
			public editableText: boolean;
			/**
			 * embed an ICC profile when exporting ( default: false )
			 * @type {boolean}
			 */
			public embedICCProfile: boolean;
			/**
			 * the color space of the exported file ( default: 
			 * ImageColorSpace.RGB )
			 * @type {Adobe.Illustrator.ImageColorSpace}
			 */
			public imageColorSpace: Adobe.Illustrator.ImageColorSpace;
			/**
			 * preserve as much of the original document's structure as 
			 * possible when exporting ( default: true )
			 * @type {boolean}
			 */
			public maximumEditability: boolean;
			/**
			 * The resolution of the exported file ( 72.0 - 2400.0; 
			 * default: 150.0 )
			 * @type {number}
			 */
			public resolution: number;
			/**
			 * All the artboards or range of the artboards will be exported 
			 * ( default: false )
			 * @type {boolean}
			 */
			public saveMultipleArtboards: boolean;
			/**
			 * should a warning dialog be displayed because of conflicts in 
			 * the export settings ( default: true )
			 * @type {boolean}
			 */
			public warnings: boolean;
			/**
			 * preserve document layers when exporting ( default: true )
			 * @type {boolean}
			 */
			public writeLayers: boolean;
		}
	}
}