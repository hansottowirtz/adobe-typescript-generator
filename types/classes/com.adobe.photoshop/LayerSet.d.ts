/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Layer set */
		class LayerSet extends Adobe.Photoshop.Layer {
			/**
			 * the art layers in this layer set
			 * @type {Adobe.Photoshop.ArtLayers}
			 * @readonly
			 */
			public readonly artLayers: Adobe.Photoshop.ArtLayers;
			/**
			 * channels that are enabled for the layer set. Must be a list 
			 * of component channels
			 * @type {any[]}
			 */
			public enabledChannels: any[];
			/**
			 * the layers in this layer set
			 * @type {Adobe.Photoshop.Layers}
			 * @readonly
			 */
			public readonly layers: Adobe.Photoshop.Layers;
			/**
			 * the top level layer sets in this document
			 * @type {Adobe.Photoshop.LayerSets}
			 * @readonly
			 */
			public readonly layerSets: Adobe.Photoshop.LayerSets;
			/**
			 * merge layerset. Returns a reference to the art layer that is 
			 * created by this method
			 * @returns {Adobe.Photoshop.ArtLayer}
			 */
			public merge(): Adobe.Photoshop.ArtLayer;
		}
	}
}