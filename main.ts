import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import { GoogleProvider } from "@cdktf/provider-google/lib/provider"
import { StorageBucket } from "@cdktf/provider-google/lib/storage-bucket"
import { StorageBucketIamBinding } from "@cdktf/provider-google/lib/storage-bucket-iam-binding";
import { BigqueryDataset } from "@cdktf/provider-google/lib/bigquery-dataset";
import { SqlDatabaseInstance } from "@cdktf/provider-google/lib/sql-database-instance";
import variables from "./variables";

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new GoogleProvider(this, "Google", {
      region: variables.region,
      zone: variables.zone,
      project: "terraform-cdk",
      // credentials,
    });

    // define resources here

    // GCS
    const cdktfGoatBucket = new StorageBucket(this, "cdktfBucket", {
      forceDestroy: true,
      labels: {
        git_commit: "2bdc0871a5f4505be58244029cc6485d45d7bb8e",
        git_file: "terraform__gcp__gcs_tf",
        git_last_modified_at: "2022-12-14-17-02-27",
        git_last_modified_by: "alvacoder",
        git_modifiers: "alvacoder",
        git_org: "bridgecrewio",
        git_repo: "terragoat",
        yor_trace: "bd00cd2e-f53f-4daf-8d4d-74c47846c1cc",
      },
      location: variables.location,
      name: `cdktfGoat-${variables.environment}`
    })

    new StorageBucketIamBinding(this, "allow_public_read", {
      bucket: cdktfGoatBucket.id,
      members: ["allUsers"],
      role: "roles/storage.objectViewer",
    });

    // Big Data
    new BigqueryDataset(this, "dataset", {
      access: [
        {
          role: "READER",
          specialGroup: "allAuthenticatedUsers",
        },
      ],
      datasetId: "terragoat_${" + variables.environment + "}_dataset",
      labels: {
        git_commit: "2bdc0871a5f4505be58244029cc6485d45d7bb8e",
        git_file: "terraform__gcp__big_data_tf",
        git_last_modified_at: "2022-12-14-17-02-27",
        git_last_modified_by: "alvacoder",
        git_modifiers: "alvacoder",
        git_org: "bridgecrewio",
        git_repo: "terragoat",
        yor_trace: "2560d883-bc3a-4cb6-b9fc-fb666edf626e",
      },
    });
    new SqlDatabaseInstance(this, "master_instance", {
      databaseVersion: "POSTGRES_11",
      name: "terragoat-${" + variables.environment + "}-master",
      region: variables.region,
      settings:
        {
          backupConfiguration:
            {
              enabled: false,
            },
          ipConfiguration:
            {
              authorizedNetworks: [
                {
                  name: "WWW",
                  value: "0.0.0.0/0",
                },
              ],
              ipv4Enabled: true,
            },
          tier: "db-f1-micro",
        },
    });
  }
}

const app = new App();
new MyStack(app, "sample");
app.synth();
