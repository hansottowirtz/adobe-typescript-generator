/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class ExportOptionsAutoCAD extends IllustratorHostObject {
			/** alter paths for appearance ( default: false ) */
			public alterPathsForAppearance: boolean;
			/**
			 * number of colors to export into the AutoCAD file ( default: 
			 * AutoCADColors.TrueColors )
			 */
			public colors: AutoCADColors;
			/** whether to convert text to outlines ( default: false ) */
			public convertTextToOutlines: boolean;
			/**
			 * which format to export the file as ( default: 
			 * AutoCADExportFileFormat.DWG )
			 */
			public exportFileFormat: AutoCADExportFileFormat;
			/**
			 * whether to preserve appearance or editability during export 
			 * ( default: AutoCADExportOption.MaximumEditability )
			 */
			public exportOption: AutoCADExportOption;
			/** export selected art only ( default: false ) */
			public exportSelectedArtOnly: boolean;
			/**
			 * raster format in which to export raster art ( default: 
			 * AutoCADRasterFormat.PNG )
			 */
			public rasterFormat: AutoCADRasterFormat;
			/**
			 * whether to scale lineweights by the same amount as rest of 
			 * the drawing ( default: false )
			 */
			public scaleLineweights: boolean;
			/**
			 * units from which to map ( default: AutoCADUnit.Millimeters )
			 */
			public unit: AutoCADUnit;
			/** ratio by which to scale the output ( default: 1.0 ) */
			public unitScaleRatio: number;
			/**
			 * release of AutoCAD to export to ( default: 
			 * AutoCADCompatibility.AutoCADRelease18 )
			 */
			public version: AutoCADCompatibility;
		}
	}
}