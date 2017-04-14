/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class PDFSaveOptions extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * create acrobat layers from top-level layers - acrobat 6 only 
			 * option ( default: false )
			 */
			public acrobatLayers: boolean;
			/**
			 * Considered for multi-asset extraction which specifies 
			 * artboard range.Empty string will extracts all the 
			 * artboards.Default is empty string ( default:  )
			 */
			public artboardRange: string;
			/** link 4 bleed values ( default: true ) */
			public bleedLink: boolean;
			/** the bleed offset rect */
			public bleedOffsetRect: any[];
			/** draw color bars ( default: false ) */
			public colorBars: boolean;
			/**
			 * how should color bitmap images be compressed ( default: 
			 * CompressionQuality.None )
			 */
			public colorCompression: Adobe.Illustrator.CompressionQuality;
			/**
			 * PDF color conversion policy. Three choices are available: 
			 * (1)No Color Conversion (2) Repurpose (3) Convert to 
			 * Destination ( default: ColorConversion.None )
			 */
			public colorConversionID: Adobe.Illustrator.ColorConversion;
			/**
			 * When NoColorConversion is specified for Color Conversion, 
			 * NoColorDestination is set ( default: ColorDestination.None )
			 */
			public colorDestinationID: Adobe.Illustrator.ColorDestination;
			/**
			 * if zero, no downsampling, otherwise, the resolution to 
			 * downsample color bitmap images to ( default: 150.0 )
			 */
			public colorDownsampling: number;
			/**
			 * downsample if the image's resolution is above this value ( 
			 * default: 225.0 )
			 */
			public colorDownsamplingImageThreshold: number;
			/**
			 * how should color bitmap images be resampled ( default: 
			 * DownsampleMethod.NODOWNSAMPLE )
			 */
			public colorDownsamplingMethod: Adobe.Illustrator.DownsampleMethod;
			/**
			 * If CMS is off, Don't Include Profiles is set ( default: 
			 * ColorProfile.None )
			 */
			public colorProfileID: Adobe.Illustrator.ColorProfile;
			/** tile size when compressing with JPEG2000 ( default: 256 ) */
			public colorTileSize: number;
			/**
			 * the version of the Acrobat file format to create ( default: 
			 * PDFCompatibility.ACROBAT5 )
			 */
			public compatibility: Adobe.Illustrator.PDFCompatibility;
			/** should line art and text be compressed? ( default: true ) */
			public compressArt: boolean;
			/** a password string to open the document ( default:  ) */
			public documentPassword: string;
			/** enable accessing 128-bit ( default: true ) */
			public enableAccess: boolean;
			/** enable copying of text 128-bit ( default: true ) */
			public enableCopy: boolean;
			/** enable copying and accessing 40-bit ( default: true ) */
			public enableCopyAccess: boolean;
			/**
			 * enable plaintext metadata 128-bit - available only for 
			 * acrobat 6 ( default: false )
			 */
			public enablePlainText: boolean;
			/** the printing flattener options */
			public flattenerOptions: Adobe.Illustrator.PrintFlattenerOptions;
			/** the transparency flattener preset name */
			public flattenerPreset: string;
			/**
			 * include a subset of fonts when less than this percentage of 
			 * characters are used ( 0.0 - 100.0; default: 100.0 )
			 */
			public fontSubsetThreshold: number;
			/**
			 * generate thumbnails for the saved document ( default: true )
			 */
			public generateThumbnails: boolean;
			/**
			 * how should grayscale bitmap images be compressed ( default: 
			 * CompressionQuality.None )
			 */
			public grayscaleCompression: Adobe.Illustrator.CompressionQuality;
			/**
			 * if zero, no downsampling, otherwise, the resolution to 
			 * downsample grayscale images to ( default: 150.0 )
			 */
			public grayscaleDownsampling: number;
			/**
			 * downsample if the image's resolution is above this value ( 
			 * default: 225.0 )
			 */
			public grayscaleDownsamplingImageThreshold: number;
			/**
			 * how should grayscale bitmap images be resampled ( default: 
			 * DownsampleMethod.NODOWNSAMPLE )
			 */
			public grayscaleDownsamplingMethod: Adobe.Illustrator.DownsampleMethod;
			/** tile size when compressing with JPEG2000 ( default: 256 ) */
			public grayscaleTileSize: number;
			/**
			 * how should monochrome bitmap images be compressed ( default: 
			 * MonochromeCompression.None )
			 */
			public monochromeCompression: Adobe.Illustrator.MonochromeCompression;
			/**
			 * If zero, no downsampling, otherwise, the resolution to 
			 * downsample images to ( default: 300.0 )
			 */
			public monochromeDownsampling: number;
			/**
			 * downsample if the image's resolution is above this value ( 
			 * default: 450.0 )
			 */
			public monochromeDownsamplingImageThreshold: number;
			/**
			 * how should monochrome bitmap images be resampled ( default: 
			 * DownsampleMethod.NODOWNSAMPLE )
			 */
			public monochromeDownsamplingMethod: Adobe.Illustrator.DownsampleMethod;
			/**
			 * custom offset (in points) for using the custom paper ( 
			 * default: 0.0 )
			 */
			public offset: number;
			/**
			 * should the PDF document be optimized for fast web viewing ( 
			 * default: false )
			 */
			public optimization: boolean;
			/**
			 * This is an optional comment which, if present, is added to 
			 * the PDF file and describes the intended printing condition ( 
			 * default:  )
			 */
			public outputCondition: string;
			/**
			 * If selected for Output Intent Profile Name, you can set the 
			 * name of a registered printing condition ( default:  )
			 */
			public outputConditionID: string;
			/**
			 * When CMS is on, the output intent profile is the same 
			 * profile selected for Destination in the Color group box ( 
			 * default:  )
			 */
			public outputIntentProfile: string;
			/** draw page information ( default: false ) */
			public pageInformation: boolean;
			/** the page marks style ( default: PageMarksTypes.Roman ) */
			public pageMarksType: Adobe.Illustrator.PageMarksTypes;
			/**
			 * PDF security printing permission ( default: 
			 * PDFPrintAllowedEnum.PRINT128HIGHRESOLUTION )
			 */
			public pDFAllowPrinting: Adobe.Illustrator.PDFPrintAllowedEnum;
			/**
			 * PDF security changes allowed ( default: 
			 * PDFChangesAllowedEnum.CHANGE128ANYCHANGES )
			 */
			public pDFChangesAllowed: Adobe.Illustrator.PDFChangesAllowedEnum;
			/**
			 * The max string length is 255 bytes. Name of PDF preset to 
			 * use.
			 */
			public pDFPreset: string;
			/**
			 * This control includes the None option for when the user is 
			 * not complying with any PDF standard ( default: 
			 * PDFXStandard.PDFXNONE )
			 */
			public pDFXStandard: Adobe.Illustrator.PDFXStandard;
			/** This displays the description from the selected preset */
			public pDFXStandardDescription: string;
			/**
			 * a password string to restrict editing security settings ( 
			 * default:  )
			 */
			public permissionPassword: string;
			/**
			 * preserve Illustrator editing capabilities when saving the 
			 * document ( default: true )
			 */
			public preserveEditability: boolean;
			/** flattening printer resolution ( default: 800.0 ) */
			public printerResolution: number;
			/** draw registration marks ( default: false ) */
			public registrationMarks: boolean;
			/**
			 * URL to the site where the specified output condition is 
			 * registered. No validation is performed on the URL ( default: 
			 *  )
			 */
			public registryName: string;
			/** require a password to open the document ( default: false ) */
			public requireDocumentPassword: boolean;
			/**
			 * use a password to restrict editing security settings ( 
			 * default: false )
			 */
			public requirePermissionPassword: boolean;
			/**
			 * This indicates if manual trapping has been prepared in the 
			 * document ( default: false )
			 */
			public trapped: boolean;
			/** draw trim marks ( default: false ) */
			public trimMarks: boolean;
			/**
			 * trim mark weight ( default: 
			 * PDFTrimMarkWeight.TRIMMARKWEIGHT0125 )
			 */
			public trimMarkWeight: Adobe.Illustrator.PDFTrimMarkWeight;
			/** view PDF after saving ( default: false ) */
			public viewAfterSaving: boolean;
		}
	}
}