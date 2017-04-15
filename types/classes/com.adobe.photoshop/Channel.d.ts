/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/**
		 * Object that stores information about a color element in the 
		 * image, analogous to a plate in the printing process that 
		 * applies a single color. The document's color mode determines 
		 * the number of default channels. For example, an RGB document 
		 * has four default channels: A composite channel: RGB; and 
		 * three component channels: red, green, and blue. A channel 
		 * can also be an alpha channel, which stores selections as 
		 * masks; or a spot channel, which stores spot colors.
		 */
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