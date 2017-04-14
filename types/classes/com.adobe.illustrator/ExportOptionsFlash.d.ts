/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class ExportOptionsFlash extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * If SaveMultipleArtboards is true,this will be considered for 
			 * multi-asset extraction which specifies artboard range.Empty 
			 * string will extracts all the artboards.Default is empty 
			 * string ( default:  )
			 */
			public artboardRange: string;
			/**
			 * how should the arts be clipped during the output ( default: 
			 * ArtClippingOption.OUTPUTARTBOUNDS )
			 */
			public artClipping: Adobe.Illustrator.ArtClippingOption;
			/** the background color */
			public backgroundColor: Adobe.Illustrator.RGBColor;
			/**
			 * a list of layers to be included as the static background in 
			 * all exported Flash frames
			 */
			public backgroundLayers: any;
			/**
			 * controls how the blend art objects are animated when export 
			 * to Flash frames ( default: 
			 * BlendAnimationType.NOBLENDANIMATION )
			 */
			public blendAnimation: Adobe.Illustrator.BlendAnimationType;
			/** should the exported file be compressed ( default: false ) */
			public compressed: boolean;
			/** should all text be converted to outlines ( default: false ) */
			public convertTextToOutlines: boolean;
			/**
			 * how much curve information should be preserved ( 0 - 10; 
			 * default: 7 )
			 */
			public curveQuality: number;
			/**
			 * should all symbol definitions in the palette be exported to 
			 * the SWF File ( default: false )
			 */
			public exportAllSymbols: boolean;
			/**
			 * how should the Flash file be created ( default: 
			 * FlashExportStyle.ASFLASHFILE )
			 */
			public exportStyle: Adobe.Illustrator.FlashExportStyle;
			/**
			 * which version of SWF to export ( default: 
			 * FlashExportVersion.FLASHVERSION9 )
			 */
			public exportVersion: Adobe.Illustrator.FlashExportVersion;
			/**
			 * when exporting layers to Flash frames ( 0.01 - 120.0; 
			 * default: 12.0 )
			 */
			public frameRate: number;
			/**
			 * should the kerning information for text objects be ignored ( 
			 * default: false )
			 */
			public ignoreTextKerning: boolean;
			/**
			 * how should the images in the exported Flash file be 
			 * compressed ( default: FlashImageFormat.LOSSLESS )
			 */
			public imageFormat: Adobe.Illustrator.FlashImageFormat;
			/**
			 * If true, include minimal XMP metadata in the exported file ( 
			 * default: false )
			 */
			public includeMetadata: boolean;
			/** what method to use ( default: FlashJPEGMethod.Standard ) */
			public jpegMethod: Adobe.Illustrator.FlashJPEGMethod;
			/** level of compression ( 0 - 10; default: 3 ) */
			public jpegQuality: number;
			/**
			 * the order in which the layers will be exported to Flash 
			 * frames ( default: LayerOrderType.BOTTOMUP )
			 */
			public layerOrder: Adobe.Illustrator.LayerOrderType;
			/**
			 * should the Flash file be set to loop when run ( default: 
			 * false )
			 */
			public looping: boolean;
			/**
			 * what access should the SWF file have - local or network 
			 * access ( default: FlashPlaybackSecurity.PlaybackLocal )
			 */
			public playbackAccess: Adobe.Illustrator.FlashPlaybackSecurity;
			/**
			 * choose whether to preserve artwork appearance or editability 
			 * (default) during export ( default: false )
			 */
			public preserveAppearance: boolean;
			/**
			 * prevent the exported file from being imported by other 
			 * applications ( default: false )
			 */
			public readOnly: boolean;
			/**
			 * if a file with the same name already exists, should it be 
			 * replaced? ( default: SaveOptions.PROMPTTOSAVECHANGES )
			 */
			public replacing: Adobe.Illustrator.SaveOptions;
			/** pixels per inch ( 72.0 - 2400.0; default: 72.0 ) */
			public resolution: number;
			/**
			 * All the artboards or range of the artboards will be exported 
			 * ( default: false )
			 */
			public saveMultipleArtboards: boolean;
		}
	}
}