# outputs.tf

output "vpc_id" {
  value = aws_vpc.main.id
}

output "subnet_ids" {
  value = aws_subnet.public[*].id
}

output "rds_security_group_id" {
  value = aws_security_group.rds_sg.id
}