/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** Options which may be supplied when opening a AutoCAD file */
		class AutoCADFileOptions extends Adobe.CsawlibIllustrator.IllustratorHostObject {
			/**
			 * to center the created artwork on the artboard (default: 
			 * true)
			 * @type {boolean}
			 */
			public centerArtwork: boolean;
			/**
			 * how to scale the AutoCAD drawing on import (default: Fit 
			 * Artboard)
			 * @type {Adobe.Illustrator.AutoCADGlobalScaleOption}
			 */
			public globalScaleOption: Adobe.Illustrator.AutoCADGlobalScaleOption;
			/**
			 * percentage scaling to apply globally on the AutoCAD drawing 
			 * (default: 1.0)
			 * @type {number}
			 */
			public globalScalePercent: number;
			/**
			 * to merge the layers of the artwork (default: false)
			 * @type {boolean}
			 */
			public mergeLayers: boolean;
			/**
			 * to scale lineweights by the same amount as rest of the 
			 * drawing (default: false)
			 * @type {boolean}
			 */
			public scaleLineweights: boolean;
			/**
			 * name of layout in the AutoCAD drawing to import
			 * @type {string}
			 */
			public selectedLayoutName: string;
			/**
			 * units to which to map (default: Millimeters)
			 * @type {Adobe.Illustrator.AutoCADUnit}
			 */
			public unit: Adobe.Illustrator.AutoCADUnit;
			/**
			 * ratio by which to scale while mapping the units (default: 
			 * 1.0)
			 * @type {number}
			 */
			public unitScaleRatio: number;
		}
	}
}