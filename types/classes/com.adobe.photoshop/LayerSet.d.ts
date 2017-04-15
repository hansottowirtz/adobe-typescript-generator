/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/**
		 * A group of layer objects, which can include art layer 
		 * objects and other (nested) layer set objects. A single 
		 * command or set of commands manipulates all layers in a layer 
		 * set object.
		 */
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