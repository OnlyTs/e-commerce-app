import { Injectable } from '@nestjs/common';
import { CreateListingDto } from './dto/create-listing.dto';
import { UpdateListingDto } from './dto/update-listing.dto';
// import { fakeListings } from 'src/fake-data';
import { Listing } from 'src/schemas/listing.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { error } from 'console';



@Injectable()
export class ListingsService {
  constructor(@InjectModel(Listing.name) private listingModel: Model<Listing>) {}

  create(createListingDto: CreateListingDto) {
    const createdListing = new this.listingModel(createListingDto);
    return createdListing.save();
  }

  findAll() {
    return this.listingModel.find();
  }

  findOne(id: string) {
    return this.listingModel.findById(id);
  }

  async update(id: string, updateListingDto: UpdateListingDto) {
    const userId = '1234';

    const listing = await this.listingModel.findOne({ _id: id, userId: userId });
    if (!listing) throw new Error('listing not found or does not belong to user');

    return this.listingModel.findOneAndUpdate( 
      {_id: id, userId: userId},
      updateListingDto,
      {new: true} 
    );
  }

  remove(id: string) {
    return this.listingModel.findByIdAndDelete(id); 
  }

  addViews(id: string) {
    const incrementedListing = this.listingModel.findByIdAndUpdate(id, 
      {$inc: {views: 1}},
      {new: true} 
    );
    if(!incrementedListing) throw new Error(`Listing with id: ${id} not found!`);
    return incrementedListing;
  }

  getUserListings(id: string) {
    return this.listingModel.find({userId: id});
  }
}
