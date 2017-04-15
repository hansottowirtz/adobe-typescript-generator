/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class LayerSet extends Adobe.Photoshop.Layer {
			/** The art layers contained in this layer set. */
			public readonly artLayers: Adobe.Photoshop.ArtLayers;
			/**
			 * The channels that are enabled for the layer set. Must be a 
			 * list of component channels.
			 */
			public enabledChannels: any[];
			/** The layers in this layer set. */
			public readonly layers: Adobe.Photoshop.Layers;
			/** The layer sets contained within the layer set. */
			public readonly layerSets: Adobe.Photoshop.LayerSets;
			/** Merges the layer set. */
			public merge(): Adobe.Photoshop.ArtLayer;
		}
	}
}