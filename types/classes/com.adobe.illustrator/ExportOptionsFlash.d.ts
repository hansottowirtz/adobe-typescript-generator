/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/**
		 * Options which may be supplied when exporting a document as 
		 * an Flash (.SWF) file
		 */
		class ExportOptionsFlash extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * If SaveMultipleArtboards is true,this will be considered for 
			 * multi-asset extraction which specifies artboard range.Empty 
			 * string will extracts all the artboards.Default is empty 
			 * string ( default:  )
			 * @type {string}
			 */
			public artboardRange: string;
			/**
			 * how should the arts be clipped during the output ( default: 
			 * ArtClippingOption.OUTPUTARTBOUNDS )
			 * @type {Adobe.Illustrator.ArtClippingOption}
			 */
			public artClipping: Adobe.Illustrator.ArtClippingOption;
			/**
			 * the background color
			 * @type {Adobe.Illustrator.RGBColor}
			 */
			public backgroundColor: Adobe.Illustrator.RGBColor;
			/**
			 * a list of layers to be included as the static background in 
			 * all exported Flash frames
			 * @type {any[]}
			 */
			public backgroundLayers: any[];
			/**
			 * controls how the blend art objects are animated when export 
			 * to Flash frames ( default: 
			 * BlendAnimationType.NOBLENDANIMATION )
			 * @type {Adobe.Illustrator.BlendAnimationType}
			 */
			public blendAnimation: Adobe.Illustrator.BlendAnimationType;
			/**
			 * should the exported file be compressed ( default: false )
			 * @type {boolean}
			 */
			public compressed: boolean;
			/**
			 * should all text be converted to outlines ( default: false )
			 * @type {boolean}
			 */
			public convertTextToOutlines: boolean;
			/**
			 * how much curve information should be preserved ( 0 - 10; 
			 * default: 7 )
			 * @type {number}
			 */
			public curveQuality: number;
			/**
			 * should all symbol definitions in the palette be exported to 
			 * the SWF File ( default: false )
			 * @type {boolean}
			 */
			public exportAllSymbols: boolean;
			/**
			 * how should the Flash file be created ( default: 
			 * FlashExportStyle.ASFLASHFILE )
			 * @type {Adobe.Illustrator.FlashExportStyle}
			 */
			public exportStyle: Adobe.Illustrator.FlashExportStyle;
			/**
			 * which version of SWF to export ( default: 
			 * FlashExportVersion.FLASHVERSION9 )
			 * @type {Adobe.Illustrator.FlashExportVersion}
			 */
			public exportVersion: Adobe.Illustrator.FlashExportVersion;
			/**
			 * when exporting layers to Flash frames ( 0.01 - 120.0; 
			 * default: 12.0 )
			 * @type {number}
			 */
			public frameRate: number;
			/**
			 * should the kerning information for text objects be ignored ( 
			 * default: false )
			 * @type {boolean}
			 */
			public ignoreTextKerning: boolean;
			/**
			 * how should the images in the exported Flash file be 
			 * compressed ( default: FlashImageFormat.LOSSLESS )
			 * @type {Adobe.Illustrator.FlashImageFormat}
			 */
			public imageFormat: Adobe.Illustrator.FlashImageFormat;
			/**
			 * If true, include minimal XMP metadata in the exported file ( 
			 * default: false )
			 * @type {boolean}
			 */
			public includeMetadata: boolean;
			/**
			 * what method to use ( default: FlashJPEGMethod.Standard )
			 * @type {Adobe.Illustrator.FlashJPEGMethod}
			 */
			public jpegMethod: Adobe.Illustrator.FlashJPEGMethod;
			/**
			 * level of compression ( 0 - 10; default: 3 )
			 * @type {number}
			 */
			public jpegQuality: number;
			/**
			 * the order in which the layers will be exported to Flash 
			 * frames ( default: LayerOrderType.BOTTOMUP )
			 * @type {Adobe.Illustrator.LayerOrderType}
			 */
			public layerOrder: Adobe.Illustrator.LayerOrderType;
			/**
			 * should the Flash file be set to loop when run ( default: 
			 * false )
			 * @type {boolean}
			 */
			public looping: boolean;
			/**
			 * what access should the SWF file have - local or network 
			 * access ( default: FlashPlaybackSecurity.PlaybackLocal )
			 * @type {Adobe.Illustrator.FlashPlaybackSecurity}
			 */
			public playbackAccess: Adobe.Illustrator.FlashPlaybackSecurity;
			/**
			 * choose whether to preserve artwork appearance or editability 
			 * (default) during export ( default: false )
			 * @type {boolean}
			 */
			public preserveAppearance: boolean;
			/**
			 * prevent the exported file from being imported by other 
			 * applications ( default: false )
			 * @type {boolean}
			 */
			public readOnly: boolean;
			/**
			 * if a file with the same name already exists, should it be 
			 * replaced? ( default: SaveOptions.PROMPTTOSAVECHANGES )
			 * @type {Adobe.Illustrator.SaveOptions}
			 */
			public replacing: Adobe.Illustrator.SaveOptions;
			/**
			 * pixels per inch ( 72.0 - 2400.0; default: 72.0 )
			 * @type {number}
			 */
			public resolution: number;
			/**
			 * All the artboards or range of the artboards will be exported 
			 * ( default: false )
			 * @type {boolean}
			 */
			public saveMultipleArtboards: boolean;
		}
	}
}