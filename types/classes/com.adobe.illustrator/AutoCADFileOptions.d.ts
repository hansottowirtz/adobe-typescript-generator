/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** Options which may be supplied when opening a AutoCAD file. */
		class AutoCADFileOptions extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * To center the created artwork on the artboard (default: 
			 * true)
			 */
			public centerArtwork: boolean;
			/**
			 * How to scale the AutoCAD drawing on import (default: Fit 
			 * Artboard)
			 */
			public globalScaleOption: Adobe.Illustrator.AutoCADGlobalScaleOption;
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
			public unit: Adobe.Illustrator.AutoCADUnit;
			/**
			 * Ratio by which to scale while mapping the units (default: 
			 * 1.0)
			 */
			public unitScaleRatio: number;
		}
	}
}