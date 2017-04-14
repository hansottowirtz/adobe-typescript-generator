/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class AutoCADFileOptions extends IllustratorHostObject {
			/**
			 * To center the created artwork on the artboard (default: 
			 * true)
			 */
			public centerArtwork: boolean;
			/**
			 * How to scale the AutoCAD drawing on import (default: Fit 
			 * Artboard)
			 */
			public globalScaleOption: AutoCADGlobalScaleOption;
			/**
			 * Percentage scaling to apply globally on the AutoCAD drawing 
			 * (default: 1.0)
			 */
			public globalScalePercent: number;
			/** To merge the layers of the artwork (default: false) */
			public mergeLayers: boolean;
			/**
			 * To scale lineweights by the same amount as rest of the 
			 * drawing (default: false)
			 */
			public scaleLineweights: boolean;
			/** Name of layout in the AutoCAD drawing to import. */
			public selectedLayoutName: string;
			/** Units to which to map (default: Millimeters) */
			public unit: AutoCADUnit;
			/**
			 * Ratio by which to scale while mapping the units (default: 
			 * 1.0)
			 */
			public unitScaleRatio: number;
		}
	}
}