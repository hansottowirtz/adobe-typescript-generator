/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Layer set */
		class LayerSet extends Adobe.Photoshop.Layer {
			/** the art layers in this layer set */
			public readonly artLayers: Adobe.Photoshop.ArtLayers;
			/**
			 * channels that are enabled for the layer set. Must be a list 
			 * of component channels
			 */
			public enabledChannels: any[];
			/** the layers in this layer set */
			public readonly layers: Adobe.Photoshop.Layers;
			/** the top level layer sets in this document */
			public readonly layerSets: Adobe.Photoshop.LayerSets;
			/**
			 * merge layerset. Returns a reference to the art layer that is 
			 * created by this method
			 */
			public merge(): Adobe.Photoshop.ArtLayer;
		}
	}
}