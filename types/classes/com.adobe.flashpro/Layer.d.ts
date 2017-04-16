/// <reference path="../../packages/com.adobe.flashpro/references.d.ts"/>

declare namespace Adobe {
	namespace Flashpro {
		/** The Layer object represents layers in the timeline. */
		class Layer extends Adobe.Csawlib.CSHostObject {
			/**
			 * Property returns the animation type of the layer as a 
			 * string. This will be one of the following: "none", "motion 
			 * object", "IK pose".
			 * @type {string}
			 * @readonly
			 */
			public readonly animationType: string;
			/**
			 * the color used to outline the different layers.  Specified 
			 * in hex form "#aarrggbb" a=alpha, r=red, g=green, b=blue.
			 * @type {string}
			 */
			public color: string;
			/**
			 * Total number of frames in the layer.
			 * @type {number}
			 * @readonly
			 */
			public readonly frameCount: number;
			/**
			 * An array of frame objects.
			 * @type {any[]}
			 * @readonly
			 */
			public readonly frames: any[];
			/**
			 * Whether to use larger layer height, legal values are 100, 
			 * 200, 300 (percent)
			 * @type {number}
			 */
			public height: number;
			/**
			 * This specifies which type of layer. Acceptable values are: 
			 * "normal", "guide", "guided", "mask", "masked", "folder".
			 * @type {string}
			 */
			public layerType: string;
			/**
			 * locked status of the layer. If set to true layer is locked. 
			 * Default value is false.
			 * @type {boolean}
			 */
			public locked: boolean;
			/**
			 * Name of the layer.
			 * @type {string}
			 */
			public name: string;
			/**
			 * whether or not to show the layer as outlines
			 * @type {boolean}
			 */
			public outline: boolean;
			/**
			 * changes the layer's parent. 
			 * A parent can be a folder, guide, or mask.
			 * returns null on layer that is on the top level
			 * @type {Adobe.Flashpro.Layer}
			 */
			public parentLayer: Adobe.Flashpro.Layer;
			/**
			 * whether the layer's objects should show up on stage. True if 
			 * layer is visible. False if layer is not. Default is true.
			 * @type {boolean}
			 */
			public visible: boolean;
		}
	}
}