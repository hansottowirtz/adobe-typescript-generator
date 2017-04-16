/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/**
		 * Options which may be supplied when saving a document as a 
		 * PDF file
		 */
		class PDFSaveOptions extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * create acrobat layers from top-level layers - acrobat 6 only 
			 * option ( default: false )
			 * @type {boolean}
			 */
			public acrobatLayers: boolean;
			/**
			 * Considered for multi-asset extraction which specifies 
			 * artboard range.Empty string will extracts all the 
			 * artboards.Default is empty string ( default:  )
			 * @type {string}
			 */
			public artboardRange: string;
			/**
			 * link 4 bleed values ( default: true )
			 * @type {boolean}
			 */
			public bleedLink: boolean;
			/**
			 * the bleed offset rect
			 * @type {any[]}
			 */
			public bleedOffsetRect: any[];
			/**
			 * draw color bars ( default: false )
			 * @type {boolean}
			 */
			public colorBars: boolean;
			/**
			 * how should color bitmap images be compressed ( default: 
			 * CompressionQuality.None )
			 * @type {Adobe.Illustrator.CompressionQuality}
			 */
			public colorCompression: Adobe.Illustrator.CompressionQuality;
			/**
			 * PDF color conversion policy. Three choices are available: 
			 * (1)No Color Conversion (2) Repurpose (3) Convert to 
			 * Destination ( default: ColorConversion.None )
			 * @type {Adobe.Illustrator.ColorConversion}
			 */
			public colorConversionID: Adobe.Illustrator.ColorConversion;
			/**
			 * When NoColorConversion is specified for Color Conversion, 
			 * NoColorDestination is set ( default: ColorDestination.None )
			 * @type {Adobe.Illustrator.ColorDestination}
			 */
			public colorDestinationID: Adobe.Illustrator.ColorDestination;
			/**
			 * if zero, no downsampling, otherwise, the resolution to 
			 * downsample color bitmap images to ( default: 150.0 )
			 * @type {number}
			 */
			public colorDownsampling: number;
			/**
			 * downsample if the image's resolution is above this value ( 
			 * default: 225.0 )
			 * @type {number}
			 */
			public colorDownsamplingImageThreshold: number;
			/**
			 * how should color bitmap images be resampled ( default: 
			 * DownsampleMethod.NODOWNSAMPLE )
			 * @type {Adobe.Illustrator.DownsampleMethod}
			 */
			public colorDownsamplingMethod: Adobe.Illustrator.DownsampleMethod;
			/**
			 * If CMS is off, Don't Include Profiles is set ( default: 
			 * ColorProfile.None )
			 * @type {Adobe.Illustrator.ColorProfile}
			 */
			public colorProfileID: Adobe.Illustrator.ColorProfile;
			/**
			 * tile size when compressing with JPEG2000 ( default: 256 )
			 * @type {number}
			 */
			public colorTileSize: number;
			/**
			 * the version of the Acrobat file format to create ( default: 
			 * PDFCompatibility.ACROBAT5 )
			 * @type {Adobe.Illustrator.PDFCompatibility}
			 */
			public compatibility: Adobe.Illustrator.PDFCompatibility;
			/**
			 * should line art and text be compressed? ( default: true )
			 * @type {boolean}
			 */
			public compressArt: boolean;
			/**
			 * a password string to open the document ( default:  )
			 * @type {string}
			 */
			public documentPassword: string;
			/**
			 * enable accessing 128-bit ( default: true )
			 * @type {boolean}
			 */
			public enableAccess: boolean;
			/**
			 * enable copying of text 128-bit ( default: true )
			 * @type {boolean}
			 */
			public enableCopy: boolean;
			/**
			 * enable copying and accessing 40-bit ( default: true )
			 * @type {boolean}
			 */
			public enableCopyAccess: boolean;
			/**
			 * enable plaintext metadata 128-bit - available only for 
			 * acrobat 6 ( default: false )
			 * @type {boolean}
			 */
			public enablePlainText: boolean;
			/**
			 * the printing flattener options
			 * @type {Adobe.Illustrator.PrintFlattenerOptions}
			 */
			public flattenerOptions: Adobe.Illustrator.PrintFlattenerOptions;
			/**
			 * the transparency flattener preset name
			 * @type {string}
			 */
			public flattenerPreset: string;
			/**
			 * include a subset of fonts when less than this percentage of 
			 * characters are used ( 0.0 - 100.0; default: 100.0 )
			 * @type {number}
			 */
			public fontSubsetThreshold: number;
			/**
			 * generate thumbnails for the saved document ( default: true )
			 * @type {boolean}
			 */
			public generateThumbnails: boolean;
			/**
			 * how should grayscale bitmap images be compressed ( default: 
			 * CompressionQuality.None )
			 * @type {Adobe.Illustrator.CompressionQuality}
			 */
			public grayscaleCompression: Adobe.Illustrator.CompressionQuality;
			/**
			 * if zero, no downsampling, otherwise, the resolution to 
			 * downsample grayscale images to ( default: 150.0 )
			 * @type {number}
			 */
			public grayscaleDownsampling: number;
			/**
			 * downsample if the image's resolution is above this value ( 
			 * default: 225.0 )
			 * @type {number}
			 */
			public grayscaleDownsamplingImageThreshold: number;
			/**
			 * how should grayscale bitmap images be resampled ( default: 
			 * DownsampleMethod.NODOWNSAMPLE )
			 * @type {Adobe.Illustrator.DownsampleMethod}
			 */
			public grayscaleDownsamplingMethod: Adobe.Illustrator.DownsampleMethod;
			/**
			 * tile size when compressing with JPEG2000 ( default: 256 )
			 * @type {number}
			 */
			public grayscaleTileSize: number;
			/**
			 * how should monochrome bitmap images be compressed ( default: 
			 * MonochromeCompression.None )
			 * @type {Adobe.Illustrator.MonochromeCompression}
			 */
			public monochromeCompression: Adobe.Illustrator.MonochromeCompression;
			/**
			 * If zero, no downsampling, otherwise, the resolution to 
			 * downsample images to ( default: 300.0 )
			 * @type {number}
			 */
			public monochromeDownsampling: number;
			/**
			 * downsample if the image's resolution is above this value ( 
			 * default: 450.0 )
			 * @type {number}
			 */
			public monochromeDownsamplingImageThreshold: number;
			/**
			 * how should monochrome bitmap images be resampled ( default: 
			 * DownsampleMethod.NODOWNSAMPLE )
			 * @type {Adobe.Illustrator.DownsampleMethod}
			 */
			public monochromeDownsamplingMethod: Adobe.Illustrator.DownsampleMethod;
			/**
			 * custom offset (in points) for using the custom paper ( 
			 * default: 0.0 )
			 * @type {number}
			 */
			public offset: number;
			/**
			 * should the PDF document be optimized for fast web viewing ( 
			 * default: false )
			 * @type {boolean}
			 */
			public optimization: boolean;
			/**
			 * This is an optional comment which, if present, is added to 
			 * the PDF file and describes the intended printing condition ( 
			 * default:  )
			 * @type {string}
			 */
			public outputCondition: string;
			/**
			 * If selected for Output Intent Profile Name, you can set the 
			 * name of a registered printing condition ( default:  )
			 * @type {string}
			 */
			public outputConditionID: string;
			/**
			 * When CMS is on, the output intent profile is the same 
			 * profile selected for Destination in the Color group box ( 
			 * default:  )
			 * @type {string}
			 */
			public outputIntentProfile: string;
			/**
			 * draw page information ( default: false )
			 * @type {boolean}
			 */
			public pageInformation: boolean;
			/**
			 * the page marks style ( default: PageMarksTypes.Roman )
			 * @type {Adobe.Illustrator.PageMarksTypes}
			 */
			public pageMarksType: Adobe.Illustrator.PageMarksTypes;
			/**
			 * PDF security printing permission ( default: 
			 * PDFPrintAllowedEnum.PRINT128HIGHRESOLUTION )
			 * @type {Adobe.Illustrator.PDFPrintAllowedEnum}
			 */
			public pDFAllowPrinting: Adobe.Illustrator.PDFPrintAllowedEnum;
			/**
			 * PDF security changes allowed ( default: 
			 * PDFChangesAllowedEnum.CHANGE128ANYCHANGES )
			 * @type {Adobe.Illustrator.PDFChangesAllowedEnum}
			 */
			public pDFChangesAllowed: Adobe.Illustrator.PDFChangesAllowedEnum;
			/**
			 * The max string length is 255 bytes. Name of PDF preset to 
			 * use.
			 * @type {string}
			 */
			public pDFPreset: string;
			/**
			 * This control includes the None option for when the user is 
			 * not complying with any PDF standard ( default: 
			 * PDFXStandard.PDFXNONE )
			 * @type {Adobe.Illustrator.PDFXStandard}
			 */
			public pDFXStandard: Adobe.Illustrator.PDFXStandard;
			/**
			 * This displays the description from the selected preset
			 * @type {string}
			 */
			public pDFXStandardDescription: string;
			/**
			 * a password string to restrict editing security settings ( 
			 * default:  )
			 * @type {string}
			 */
			public permissionPassword: string;
			/**
			 * preserve Illustrator editing capabilities when saving the 
			 * document ( default: true )
			 * @type {boolean}
			 */
			public preserveEditability: boolean;
			/**
			 * flattening printer resolution ( default: 800.0 )
			 * @type {number}
			 */
			public printerResolution: number;
			/**
			 * draw registration marks ( default: false )
			 * @type {boolean}
			 */
			public registrationMarks: boolean;
			/**
			 * URL to the site where the specified output condition is 
			 * registered. No validation is performed on the URL ( default: 
			 *  )
			 * @type {string}
			 */
			public registryName: string;
			/**
			 * require a password to open the document ( default: false )
			 * @type {boolean}
			 */
			public requireDocumentPassword: boolean;
			/**
			 * use a password to restrict editing security settings ( 
			 * default: false )
			 * @type {boolean}
			 */
			public requirePermissionPassword: boolean;
			/**
			 * This indicates if manual trapping has been prepared in the 
			 * document ( default: false )
			 * @type {boolean}
			 */
			public trapped: boolean;
			/**
			 * draw trim marks ( default: false )
			 * @type {boolean}
			 */
			public trimMarks: boolean;
			/**
			 * trim mark weight ( default: 
			 * PDFTrimMarkWeight.TRIMMARKWEIGHT0125 )
			 * @type {Adobe.Illustrator.PDFTrimMarkWeight}
			 */
			public trimMarkWeight: Adobe.Illustrator.PDFTrimMarkWeight;
			/**
			 * view PDF after saving ( default: false )
			 * @type {boolean}
			 */
			public viewAfterSaving: boolean;
		}
	}
}