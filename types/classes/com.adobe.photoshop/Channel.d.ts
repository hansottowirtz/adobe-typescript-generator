/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class Channel extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/** The color of the channel. Not valid for component channels. */
			public color: Adobe.Photoshop.SolidColor;
			/** A histogram of the color of the channel. */
			public readonly histogram: any[];
			/** The type of channel. */
			public kind: Adobe.Photoshop.ChannelType;
			/** The channel name. */
			public name: string;
			/**
			 * The opacity of alpha channels (called solidity for spot 
			 * channels). Range: 0 to 100. Valid only when 'type' = masked 
			 * area or selected area.
			 */
			public opacity: number;
			/** If true, the channel is visible. */
			public visible: boolean;
			/**
			 * Duplicate this object.
			 * @param {Adobe.Photoshop.Document} targetDocument - The 
			 * document to duplicate the channel to.
			 */
			public duplicate(targetDocument: Adobe.Photoshop.Document): Adobe.Photoshop.Channel;
			/** Merges a spot channel into the component channels. */
			public merge(): void;
			/** delete the object */
			public remove(): void;
		}
	}
}